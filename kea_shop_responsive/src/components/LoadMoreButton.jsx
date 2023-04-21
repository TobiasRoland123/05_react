import Button from "@mui/material/Button";

export default function LoadMoreButton(props) {
  return (
    <>
      <Button variant="contained" onClick={() => props.setPage((oldpage) => oldpage + 1)} id="load_more_btn">
        Load 10 more {props.page}
      </Button>
    </>
  );
}
