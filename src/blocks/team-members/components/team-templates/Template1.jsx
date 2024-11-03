export default function Template1(props) {
  const { RichText, members = [], updateMember = () => {}, MediaPlaceholder, onClick = () => {} } = props;
  return (
    <div className="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full">
      {members.map((member, index) => {
        const { name, position, image } = member;
        return (
          <>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full" onClick={() => onClick(index)}>
              <div className="relative mb-5">
                {image ? (
                  <img src="https://pagedone.io/asset/uploads/1698649968.png" alt="Marvin image" className="w-28 h-28 profile-pic rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600" />
                ) : (
                  <MediaPlaceholder
                    onSelect={(el) => {
                      updateMember(index, "image", el.url);
                    }}
                    onSelectURL={(url) => {
                      updateMember(index, "image", url);
                    }}
                    allowedTypes={["image"]}
                    multiple={false}
                    labels={{ title: "Image" }}
                    icon="image"
                  />
                )}
                {/* <MediaPlaceholder
                  onSelect={(el) => {
                    updateMember(index, "image", el.url);
                  }}
                  onSelectURL={(url) => {
                    updateMember(index, "image", url);
                  }}
                  allowedTypes={["image"]}
                  multiple={false}
                  labels={{ title: "" }}
                  icon="image"
                /> */}
              </div>
              <RichText
                tagName="h4" // The tag here is the element output and editable in the admin
                value={name} // Any existing content, either from the database or an attribute default
                allowedFormats={["core/bold", "core/italic"]} // Allow the content to be made bold or italic, but do not allow other formatting options
                onChange={(name) => updateMember(0, "name", name)} // Store updated contentI as a block attribute
                placeholder={"Name..."}
                className="tmbp-name text-inherit text-xl font-semibold text-center mb-2 transition-all duration-500"
              />
              {/* <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">Marvin McKinney</h4> */}
              <RichText
                tagName="span" // The tag here is the element output and editable in the admin
                value={position} // Any existing content, either from the database or an attribute default
                allowedFormats={["core/bold", "core/italic"]} // Allow the content to be made bold or italic, but do not allow other formatting options
                onChange={(position) => updateMember(index, "position", position)} // Store updated content as a block attribute
                placeholder={"Position..."}
                className="tmbp-position text-inherit  text-center block transition-all duration-500 group-hover:text-gray-900"
              />
              {/* <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">Founder</span> */}
            </div>
          </>
        );
      })}
    </div>
  );
}
