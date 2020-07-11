// Feed model
export interface Feed {
  _id: string,
  content: string,
  image: {
    imageName: string,
    imagePath: string
  },
  likes: number,
  creator: {
    name: string,
    role: string
  },
  createdAt: string
}
