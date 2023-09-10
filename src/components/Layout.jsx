import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { dataSource } from "./Data";
import { useState } from "react";

const Layout = () => {
  const [filteredList, setFilteredList] = new useState(dataSource);
  const [selectedWord, setSelectedWord] = useState(null);

  // When Click on Word it show Meaning
  const handleWordClick = (word) => {
    setSelectedWord(word);
  };

  // Search
  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list [...dataSource] is Spreed Operator
    var updatedList = [...dataSource];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return (
        item.word.toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };

  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Dictionary</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border-0 shadow-none"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="">About Us</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link href="https://t.me/camboits" target="_blank">
                <FontAwesomeIcon
                  icon={faTelegram}
                  size="xl"
                  className="telegram"
                />
              </Nav.Link>
              <Nav.Link
                href="https://github.com/PhoeukPha/dictionary-reactjs/#readme"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="card border-0 mt-3">
        <div className="card-body card-body-custom">
          <div className="row">
            <div className="col-md-3 col-xl-3">
              <div className="flex">
                <input
                  className="shadow-none form-control"
                  type="text"
                  id="txtSearch"
                  placeholder="Search Word"
                  onChange={filterBySearch}
                />
              </div>
              <div className="word-list mt-3 mh-50">
                <ul>
                  {filteredList
                    .sort((a, b) => (a.word > b.word ? 1 : -1))
                    .map((n) => (
                      <li key={n.id}>
                        <a
                          onClick={() => handleWordClick(n)}
                          className={selectedWord === n ? "selected" : ""}
                        >
                          {n.word}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="col-md-9 col-xl-9">
              <div className="card border-0 mh-50">
                {selectedWord ? (
                  <>
                    <div className="card-header bg-transparent m-border-top">
                      <h2 className="color-purple">{selectedWord.word}</h2>
                    </div>
                    <div className="card-body scroll-y card-full-screen-207">
                      <div
                        className="inline-2"
                        dangerouslySetInnerHTML={{
                          __html: selectedWord.meaning,
                        }}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="card-body card-full-screen center">
                      <h3>Select a word to see its definition.</h3>
                    </div>
                  </>
                )}
                <div className="card-footer bg-transparent text-center">
                  <a href="https://www.pha-dev.com" target="__blank">
                    www.pha-dev.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
