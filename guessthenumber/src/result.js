function Result(params) {
  console.log("Values", params.term);
  const guessNumber = Number(params.term);

  if (!params.term || isNaN(guessNumber)) {
    return <h3 className="text-lg font-semibold">Enter a Value</h3>;
  }

  if (params.term > params.randomNumber) {
    return <h3>Your guess is high!</h3>;
  } else if (params.term < params.randomNumber) {
    return <h3>Your guess is low!</h3>;
  } else {
    return <h3>Congratulations! Your guess is correct!</h3>;
  }
}

export default Result;
