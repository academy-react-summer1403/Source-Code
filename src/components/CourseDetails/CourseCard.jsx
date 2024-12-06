/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function CourseCard({ title, image, teacher }) {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 text-center">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-md"
      />
      <h3 className="mt-4 font-bold">{title}</h3>
      <p className="text-sm mt-2">مدرس: {teacher}</p>
    </div>
  );
}
