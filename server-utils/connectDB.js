const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://MIRERSE:YIUDkSJJABiw7LUZ@cluster0.rqqyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
