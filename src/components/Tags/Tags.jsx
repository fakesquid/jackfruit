import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTags = styled.div`
  ul {
    padding: 0;

    li {
      display: inline-block;
      margin-right: 1rem;
      margin-bottom: 0.5rem;
      border-style: solid;
      border-width: 1px;

      // Default Tag Color
      border-color: #272635;
      color: #272635;
      box-shadow: 3px -3px 0 1px #272635;
    }

    .tag {
      padding: 0.3rem 1rem;
    }

    // Custom Tag Colors
    .Volunteer {
      background: #f3a39e;
    }
    .Blueprint {
      background: #3a9dfa;
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

ListTags.propTypes = {
  value: PropTypes.string,
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

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default Tags;
