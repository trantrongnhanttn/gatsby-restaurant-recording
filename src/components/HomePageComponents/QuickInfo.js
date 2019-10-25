import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { styles } from "../../utils"
import { SectionButton, Section, Title } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
            quibusdam quo doloremque molestias reprehenderit corrupti ad amet?
            Laborum, rerum corporis! Aperiam laboriosam animi maxime inventore?
            Voluptas ullam eos praesentium atque?
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
