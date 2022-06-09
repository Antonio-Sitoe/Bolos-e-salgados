export interface HomeProps {
  error: Boolean
  banner: {
    banner_title: string,
    Banner_img: string
  }
  kit: {
    kitTitle: string
    kitImage: { url: string }
    kitDescription: { text: string }
  }
}