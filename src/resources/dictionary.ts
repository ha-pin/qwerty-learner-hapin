import type { Dictionary, DictionaryResource } from '@/typings/index'
import { calcChapterCount } from '@/utils'

const kzHapin: DictionaryResource[] = [
  {
    id: 'arabic_zh_basic_3000',
    name: '哈拼基础3000词 (老文字版)',
    description: '基础3000词老文字版，基于哈拼实现。',
    category: '哈萨克语',
    url: '/dicts/qwerty_basic_3000_arabic.json',
    language: 'kk',
    length: 3002,
    tags: ['老文字', '哈拼'],
    languageCategory: 'kk',
  },
  {
    id: 'cyrillic_zh_basic_3000',
    name: '哈拼基础3000词 (西里尔字母版)',
    description: '基础3000词西里尔字母版，基于哈拼实现。',
    category: '哈萨克语',
    url: '/dicts/qwerty_basic_3000_cyrillic.json',
    language: 'kk',
    length: 3002,
    tags: ['西里尔字母', '哈拼'],
    languageCategory: 'kk',
  },
]

/**
 * Built-in dictionaries in an array.
 * Why arrays? Because it keeps the order across browsers.
 */
export const dictionaryResources: DictionaryResource[] = [...kzHapin]

export const dictionaries: Dictionary[] = dictionaryResources.map((resource) => ({
  ...resource,
  chapterCount: calcChapterCount(resource.length),
}))

/**
 * An object-map from dictionary IDs to dictionary themselves.
 */
export const idDictionaryMap: Record<string, Dictionary> = Object.fromEntries(dictionaries.map((dict) => [dict.id, dict]))
