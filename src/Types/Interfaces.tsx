export interface HomeProps {
  error: Boolean
  banner_image: {
    id: string
    bannerTitle: string
    bannerImage: { url: string }
  }
  kit: {
    kitTitle: string
    kitImage: { url: string }
    kitDescription: { text: string }
  }
}