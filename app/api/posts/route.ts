import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'public/data/posts.json');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // 보안을 위해 환경변수에서만 읽어옵니다.
const REPO_OWNER = 'small-creator';
const REPO_NAME = 'my_realtor';

export async function GET() {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const { password, posts } = await request.json();

    // 간단한 비밀번호 체크 (나중에 환경변수 대처 권장)
    if (password !== (process.env.ADMIN_PASSWORD || 'admin1234')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const content = JSON.stringify(posts, null, 2);
    const encodedContent = Buffer.from(content).toString('base64');

    // 1. 기존 파일의 SHA 값 가져오기 (GitHub API 업데이트 필수)
    const fileRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/public/data/posts.json`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const fileData = await fileRes.json();
    const sha = fileData.sha;

    // 2. GitHub API로 파일 업데이트
    const updateRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/public/data/posts.json`, {
      method: 'PUT',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Update posts via Admin Dashboard',
        content: encodedContent,
        sha: sha,
      }),
    });

    if (!updateRes.ok) {
      const errorData = await updateRes.json();
      throw new Error(errorData.message || 'GitHub API update failed');
    }

    // 로컬 파일도 업데이트 (개발 환경용)
    if (process.env.NODE_ENV === 'development') {
      fs.writeFileSync(DATA_FILE, content);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
