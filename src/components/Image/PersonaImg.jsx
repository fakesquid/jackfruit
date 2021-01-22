import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const UserPersonaImage = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      userPersona1: file(relativePath: { eq: "juntaka.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      userPersona2: file(relativePath: { eq: "fankang.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      {id === 1 ? (
        <Img fluid={data.userPersona1.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.userPersona2.childImageSharp.fluid} />
      )}
    </>
  );
};

export default UserPersonaImage;
