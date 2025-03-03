import slide from "../../assets/images/tour-guide/slide.png";

const WhereToStay = () => {
  return (
    <div>
      <h3 className="text-2xl font-medium mb-3 text-[#004265]">
        Palazzo Petrvs
      </h3>
      <p className="text-[#565656] 2xl:text-xl xl:text-lg text-base">
        Nestled within a historic former palace in the heart of Umbria&apos;s
        Orvieto, Palazzo Petrvs is steps from the Duomo Orvieto. The luxury
        boutique hotel has nine stately guest rooms and suites with original
        architectural elements, bold textiles, and contemporary furnishings. A
        restaurant and bar specialize in Italian cuisine. Catering to guests in
        search of history and luxury, Palazzo Petrvs offers a central location
        for exploring Orvieto’s Etruscan roots.
      </p>
      <figure className="rounded mt-5">
        <img src={slide} alt="w-full h-full object-cover rounded" />
      </figure>
    </div>
  );
};

export default WhereToStay;
