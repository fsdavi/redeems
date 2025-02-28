export type RedeemPage = {
  id: string
  status: string
  title: string
  welcome_title: string
  welcome_phrase: string
  logo_url: string
  background_color: string
  button_color: string
  items: Item[]
  extra_questions: ExtraQuestion[]
}

export type Item = {
  customer_product_id: string
  name: string
  quantity: number
  optional: boolean
  image_url: string
  sizes_grid?: SizesGrid
  sizes: Size[]
}

export type SizesGrid = {
  name: string
}

export type Size = {
  id: string
  name: string
}

export type ExtraQuestion = {
  id: number
  answer_type: string
  question: string
  position: number
  options: string[]
}
