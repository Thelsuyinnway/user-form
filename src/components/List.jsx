import Card from "./Card";

const List = (props) => {
  return (
    <>
      {props.userInfo.length == 0 ? (
        <>
          <Card css={"card-mt"}>
            <p className="text">Fill the user data</p>
          </Card>
        </>
      ) : (
        <>
          {props.userInfo.map((info) => {
            return (
              <Card css={"card-mt"}>
                <div className="list">
                  <p>Name :{info.name}</p>
                  <p>From :{info.live}</p>
                  <p>Email :{info.email}</p>
                </div>
              </Card>
            );
          })}
        </>
      )}
    </>
  );
};
export default List;
