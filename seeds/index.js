const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n ____Data Base Synced____\n');
    
    await seedCategories();
    console.log('\n ____Categories Seeded____\n');
    
    await seedProducts();
    console.log('\n ____Products Seeded____\n');
    
    await seedTags(); 
    console.log('\n ____Tags Seeded____\n');
    
    await seedProductTags(); 
    console.log('\n ____Product Tags Seeded____\n');
};

seedAll(); 