import Card from "./card";
const Courses = () => {
    const data = [
        {
            titles: "Start with HTML",
            description: "HTML is a Markup Language.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYQHBVmDs5_w-sH0ulNP8LxJ3ugQPjne_vUjgglh8zGAmlubyNaw-fXkx&s=10"
        },
        {
            titles: "Start with CSS",
            description: "CSS is a Styling Language.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYQHBVmDs5_w-sH0ulNP8LxJ3ugQPjne_vUjgglh8zGAmlubyNaw-fXkx&s=10"
        },
        {
            titles: "Start with JavaScript",
            description: "JavaScript is a Programming Language.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYQHBVmDs5_w-sH0ulNP8LxJ3ugQPjne_vUjgglh8zGAmlubyNaw-fXkx&s=10"
        },
        {
            titles: "Start with React",
            description: "React is a Library.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYQHBVmDs5_w-sH0ulNP8LxJ3ugQPjne_vUjgglh8zGAmlubyNaw-fXkx&s=10"
        }
    ]
    return (
        <>
        <div className="courses">
            {data.map((items, i) => {
                return(
                    <Card
                        title={items.titles}
                        description={items.description}
                        image={items.image}
                    />
                )
            })}
        </div>
        </>
    )
}
export default Courses