export const getUserId = (userImage: string) => {
  const imageRegex = /(?<=avatars.githubusercontent.com\/u\/)(.*)(?=\?v=4)/g
  const matches = userImage.match(imageRegex) || []
  return matches[0]
}
