/* eslint-disable react/prop-types */
const CommonTitle = ({ title, italic }) => {
  return (
    <h3 className="text-4xl font-editorsNoteNormal text-primary text-center">
      {title}
      <span className="font-editorsNoteItalic">{italic}</span>
    </h3>
  );
};

export default CommonTitle;
