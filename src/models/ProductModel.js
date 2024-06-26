
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    image: [String],
    category: String,
    brand: String,
    price: Number,
    description: String,
    quantity: Number,
    model: String,
    offer: {
        offer_title: String,
        discount: String,
        offer_image: String
    },
    specification: {
        volts: String,
        power_source: String,
        battery_type: String,
        max_torque: String,
        speed_settings: String,
        chuck_size: String,
        clutch_settings: String,
        safety_features: [String],
        compatibility: [String]
    },
    included_accessories: [String],
    weight: String,
    dimensions: String,
    warranty: String,
    color: [String],
    variant: [String],
    material: String,
    certification: String,
    usage: [String],
    recommended_applications: [String],
    features: [String],
    availability: String,
    shipping_weight: String,
    shipping_dimensions: String,
    shipping_restrictions: String,
    shipping_method: [String],
    assembly_required: Boolean,
    country_of_origin: String,
    manufacturer: String,
    return_available: Boolean,
    return_policy: String
});

module.exports = mongoose.model('products', productSchema);
