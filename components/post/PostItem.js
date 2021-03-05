import Image from "next/image";
export default function PostItem(props) {
    const { id, title, imageUrl } = props.item;
    return (
        <article className="post-item row align-items-center">
            <div className="col-3 py-2">
                <div className="p-image">
                    <img src={imageUrl} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="col-8">
                <div className="p-title">
                    <a href={`/post/${id}`}>{title}</a>
                </div>
            </div>
        </article>
    );
}
