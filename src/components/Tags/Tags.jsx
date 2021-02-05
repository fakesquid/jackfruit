import React from 'react';

const ListTags = (props) => {
  const { value } = props;
  return <li className={`tag ${value}`}>{value}</li>;
};

const Tags = (props) => {
  const { tags } = props;

  const tagColor = (n) => {
    const colors = ['dark', 'pink', 'blue', 'yellow', 'green'];
    return colors[n];
  };

  return (
    <div className={`tag ${tagColor}`}>
      <div className="tag-text">
        <ul>
          {tags.map((tag) => (
            <ListTags key={tag.toString()} value={tag} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tags;
