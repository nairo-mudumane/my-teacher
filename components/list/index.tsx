import { Button } from "@mui/material";
import { ITeacher } from "../../@types";
import { StyledItem, StyledList } from "./styles";

interface IList {
  teachers?: ITeacher[];
}

interface Item {
  item: ITeacher;
}

const Item = ({ item }: Item) => {
  return (
    <StyledItem>
      <div className="img">
        <img src={item.picture} alt={`${item.name}'s picture`} />
      </div>

      <div>
        <p className="name">{item.name}</p>
        <p className="price">USD {item.price_by_hour} p/hour</p>
        <p className="description">{item.description}</p>
      </div>
      <div>
        <Button variant="contained" sx={{ px: "4rem" }}>
          Learn
        </Button>
      </div>
    </StyledItem>
  );
};

export function List(props: IList) {
  if (props.teachers) {
    return (
      <StyledList>
        {props.teachers.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </StyledList>
    );
  }

  return <StyledList>no teachers!</StyledList>;
}
