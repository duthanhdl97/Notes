import { ulid } from 'ulid'

export function generateUlid(timestamp?: number): string {
  return ulid(timestamp)
}
