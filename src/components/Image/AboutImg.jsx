/* eslint-disable no-nested-ternary */
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

const AboutImage = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "about/Profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      singapore1: file(relativePath: { eq: "about/singapore1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      seoul1: file(relativePath: { eq: "about/seoul1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      seoul2: file(relativePath: { eq: "about/seoul2.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      seoul3: file(relativePath: { eq: "about/seoul3.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nice1: file(relativePath: { eq: "about/nice1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      huashan1: file(relativePath: { eq: "about/huashan1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food1: file(relativePath: { eq: "about/food1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food2: file(relativePath: { eq: "about/food2.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food3: file(relativePath: { eq: "about/food3.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food4: file(relativePath: { eq: "about/food4.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food5: file(relativePath: { eq: "about/food5.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food6: file(relativePath: { eq: "about/food6.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      {id === 1 ? (
        <div className="about-img">
          <Img fluid={data.profile.childImageSharp.fluid} />
        </div>
      ) : id === 2 ? (
        <Img fluid={data.seoul1.childImageSharp.fluid} />
      ) : id === 3 ? (
        <Img fluid={data.singapore1.childImageSharp.fluid} />
      ) : id === 4 ? (
        <Img fluid={data.seoul2.childImageSharp.fluid} />
      ) : id === 5 ? (
        <Img fluid={data.seoul3.childImageSharp.fluid} />
      ) : id === 6 ? (
        <Img fluid={data.huashan1.childImageSharp.fluid} />
      ) : id === 7 ? (
        <Img fluid={data.nice1.childImageSharp.fluid} />
      ) : id === 8 ? (
        <Img fluid={data.food1.childImageSharp.fluid} />
      ) : id === 9 ? (
        <Img fluid={data.food2.childImageSharp.fluid} />
      ) : id === 10 ? (
        <Img fluid={data.food3.childImageSharp.fluid} />
      ) : id === 11 ? (
        <Img fluid={data.food4.childImageSharp.fluid} />
      ) : id === 12 ? (
        <Img fluid={data.food5.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.food6.childImageSharp.fluid} />
      )}
    </>
  );
};

export default AboutImage;
