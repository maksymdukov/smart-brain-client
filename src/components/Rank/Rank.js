import React, { useEffect, useState } from "react";

const Rank = ({ name, entries }) => {
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    fetch(
      `https://uvvq3cwd4d.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`
    )
      .then((resp) => resp.json())
      .then((data) => setEmoji(data.input));
  }, [entries]);

  return (
    <div>
      <div className="white f3">
        {`${name}, your current entry count is...`}
      </div>
      <div className="white f1">
        {entries} {emoji}
      </div>
    </div>
  );
};

export default Rank;
