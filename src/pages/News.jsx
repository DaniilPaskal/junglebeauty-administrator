import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { GetFile } from "../components/DBFunctions";
import TextRow from "../components/TextRow";

const News = () => {
  const [news, getNews] = useEffect([]);

  return (
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Posted</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {news.map((newsItem) => {
            return (
              <tr></tr>
            );
          })}
        </tbody>
      </Table>
  );
}

export default News;