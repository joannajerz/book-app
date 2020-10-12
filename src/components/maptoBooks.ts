import { Book } from "../models/book"

function mapToBooks(data: any): Book[]{
    return data.map(
        (element: any)=>{
            let description = element.volumeInfo.description || "brak opisu"
            let imageUrl = element.volumeInfo.imageLinks? element.volumeInfo.imageLinks.thumbnail : "https://i.ibb.co/vwY2Zhc/600px-No-image-available-svg.png"
            return  {
                title: element.volumeInfo.title,
                id: element.id,
                description: description,
                image: imageUrl
            }
        }
     )
}
export default mapToBooks;