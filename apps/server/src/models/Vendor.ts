import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Vendor = mongoose.model("Vendor", vendorSchema);

const createVendor = async () => { 
  try {
    const newVendor = new Vendor({
      name: "John Doe",
      email: "john@example.com",
    });
    const newVendor2 = new Vendor({
      name: "John Doe2",
      email: "john2@example.com",
    });
    const newVendor3 = new Vendor({
      name: "John Doe3",
      email: "john3@example.com",
    });

    const savedVendor = await newVendor.save();
    const savedVendor2 = await newVendor2.save();
    const savedVendor3 = await newVendor3.save();
    console.log("Vendor saved successfully:", savedVendor3);
    console.log("Vendor saved successfully:", savedVendor2);
    console.log("Vendor saved successfully:", savedVendor);
  } catch (err) {
    console.error("Error saving vendor:", err);
  }
};

createVendor();

export default Vendor;
