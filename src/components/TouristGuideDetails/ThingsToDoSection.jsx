/* eslint-disable react/prop-types */
import ThingsToDoItem from './ThingsToDoItem';

const ThingsToDoSection = ({ id }) => {
  const thingsToDo = [
    {
      title: 'Explore the Denali Park Road',
      description:
        'Travel along the 92-mile park road for stunning views of Denali, wildlife sightings, and access to hiking trails. Private vehicles are limited, so use shuttle buses or guided tours.',
    },
    {
      title: 'Wildlife Viewing',
      description:
        'Spot iconic Alaskan animals such as grizzly bears, moose, caribou, wolves, and Dall sheep in their natural habitat.',
    },
    {
      title: 'Hiking and Backpacking',
      description:
        'Enjoy a variety of trails, from short walks like Horseshoe Lake Trail to backcountry hiking for a true wilderness experience.',
    },
    {
      title: 'Flightseeing Tours',
      description:
        "Take an aerial tour for breathtaking views of Denali's towering peak, glaciers, and rugged terrain, with optional glacier landings.",
    },
    {
      title: 'Visit the Visitor Centers',
      description:
        "Take an aerial tour for breathtaking views of Denali's towering peak, glaciers, and rugged terrain, with optional glacier landings.",
    },
    {
      title: 'Photography',
      description:
        "Capture the beauty of Denali's landscapes, wildlife, and the northern lights during the fall and winter seasons.",
    },
    {
      title: 'Sled Dog Demonstrations',
      description:
        "Visit the park's kennels to learn about Denali's working sled dogs and see live demonstrations during the summer.",
    },
    {
      title: 'Rafting and Kayaking',
      description:
        'Experience thrilling whitewater rafting or peaceful floats on nearby rivers like the Nenana River.',
    },
    {
      title: 'Camping',
      description:
        "Stay overnight at one of the park's six campgrounds or venture into the backcountry for a more rugged experience.",
    },
    {
      title: 'Winter Activities',
      description:
        'In the off-season, enjoy cross-country skiing, snowshoeing, and aurora viewing in the serene, snowy landscapes.',
    },
  ];
  return (
    <section id={id} className="bg-[#f4f4f4] py-7 lg:py-10 px-5 lg:px-8">
      {/* title */}
      <div className="text-center space-y-5">
        <h2 className="font-editorsNoteNormal text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider">
          Things To Do Denail National Park
        </h2>
        <p className="xl:w-2/4 mx-auto text-text-gray font-interTight md:text-lg">
          Denali National Park offers a wide range of activities for nature
          enthusiasts, adventure seekers, and wildlife lovers. Here are some top
          things to do:
        </p>
      </div>

      {/* things to do */}
      <div className="mt-10 flex flex-col md:flex-row gap-10 xl:gap-16">
        <div className="space-y-5 w-full md:w-1/2">
          {thingsToDo?.slice(0, 5)?.map((item, idx) => (
            <ThingsToDoItem key={idx} item={item} index={idx} />
          ))}
        </div>
        <div className="space-y-5 w-full md:w-1/2">
          {thingsToDo?.slice(5)?.map((item, idx) => (
            <ThingsToDoItem key={idx} item={item} index={idx + 5} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsToDoSection;
