const Tour = require('./../models/tourModel');
class APIFeatures {
    constructor(query) {
        this.query = query;
    }

    sort() {
        console.log('from sort');
        if(this.query.sort){
            const sort = this.query.sort.split(',').join(' ');
            this.query = this.query.sort(sort);
          }else{
            this.query = this.query.sort('-createdAt');
          }
        return this;
    }

    limitFields() {
        const fields = req.query.fields.split(',').join(' ');
        query = query.select(fields);
        return this;
    }

    paginate() {
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 10;
        const skip = (page - 1)* limit;
       
        query = query.skip(skip).limit(limit);
    }

}

module.exports = APIFeatures;