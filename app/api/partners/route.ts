import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const partnersDir = join(process.cwd(), 'data', 'partners')
  const files = readdirSync(partnersDir)
  
  const partners = files
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const content = readFileSync(join(partnersDir, file), 'utf-8')
      const data = JSON.parse(content)
      return {
        id: data.id,
        name: data.name
      }
    })

  return NextResponse.json(partners)
}