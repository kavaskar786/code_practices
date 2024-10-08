import { FaBeer } from "react-icons/fa";
import "./css/style.css";
const StyleCard = () => {
  let styles = {
    backgroundColor: "lightgrey",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
  };
  return (
    <div>
      <div
        className="card"
        style={{
          backgroundColor: "lightblue",
          padding: "20px",
          borderRadius: "10px",
          color: "darkblue",
        }}
      >
        <h1 className="title">Inline CSS</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
          incidunt dolor magni minima, libero illum quaerat soluta eos eveniet
          officiis nesciunt delectus perspiciatis atque aperiam beatae? Fugit
          aut repudiandae sed officiis? Doloribus rem dolores, tenetur quisquam
          numquam assumenda illo impedit mollitia nulla a tempora blanditiis
          omnis. Doloremque ad nemo dignissimos nulla, quam eum voluptas ipsam
          aspernatur! Autem iusto, unde adipisci quo sit illum explicabo aperiam
          vel suscipit doloremque a tenetur labore! Voluptatum delectus eum illo
          voluptas vitae, ipsum numquam architecto asperiores accusantium enim
          amet animi impedit officia perferendis facere accusamus placeat beatae
          ad pariatur minus sunt quam vel? Dicta, totam!
        </p>
      </div>
      <div className="card" style={styles}>
        <h1 className="title">Object CSS</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
          incidunt dolor magni minima, libero illum quaerat soluta eos eveniet
          officiis nesciunt delectus perspiciatis atque aperiam beatae? Fugit
          aut repudiandae sed officiis? Doloribus rem dolores, tenetur quisquam
          numquam assumenda illo impedit mollitia nulla a tempora blanditiis
          omnis. Doloremque ad nemo dignissimos nulla, quam eum voluptas ipsam
          aspernatur! Autem iusto, unde adipisci quo sit illum explicabo aperiam
          vel suscipit doloremque a tenetur labore! Voluptatum delectus eum illo
          voluptas vitae, ipsum numquam architecto asperiores accusantium enim
          amet animi impedit officia perferendis facere accusamus placeat beatae
          ad pariatur minus sunt quam vel? Dicta, totam!
        </p>
      </div>
      <div className="icon">
        <p className="in-icon">
          <FaBeer />
        </p>
      </div>
    </div>
  );
};
export default StyleCard;
