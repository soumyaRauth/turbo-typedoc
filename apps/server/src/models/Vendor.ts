import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Vendor = mongoose.model('Vendor', vendorSchema);

// Create a new Vendor document
const createVendor = async () => {
  try {
    const newVendor = new Vendor({
      name: 'John Doe',
      email: 'john@example.com',
    });

    const savedVendor = await newVendor.save();
    console.log('Vendor saved successfully:', savedVendor);
  } catch (err) {
    console.error('Error saving vendor:', err);
  }
};

// Call the createVendor function to test
createVendor();

export default Vendor;