import React from 'react';
import styled from 'styled-components';

const StyledTags = styled.div`
  ul {
    padding: 0;

    li {
      display: inline-block;
      margin-right: 1rem;
      margin-bottom: 0.5rem;
      color: #f8f8f8;
      font-weight: 700;

      // Default Tag Color
      background: #272635;
    }

    .tag {
      padding: 0.3rem 1rem;
      border-radius: 3px;
    }

    // Custom Tag Colors
    .Volunteer {
      background: #f3a39e;
    }
    .Blueprint {
      background: #0078e8;
    }
    .Code {
      background: #fdb927;
    }
    .Design {
      background: #65bf73;
    }
  }
`;

const ListTags = (props) => {
  const { value } = props;
  return <li className={`tag ${value}`}>{value}</li>;
};

const Tags = (props) => {
  const { tags } = props;

  return (
    <StyledTags>
      <ul>
        {tags.map((tag) => (
          <ListTags key={tag.toString()} value={tag} />
        ))}
      </ul>
    </StyledTags>
  );
};

export default Tags;
