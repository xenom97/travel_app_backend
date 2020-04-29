class CustomError extends Error {
  constructor(err) {
    super(err.message);
    this.name = err.name;
  }
}

module.exports = CustomError;