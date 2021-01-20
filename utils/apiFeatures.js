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
        const numberPage = await Tour.countDocuments();
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 10;
        const skip = (page - 1)* limit;
        // page numbers is greater then existing document in db then throw error
        if(skip > numberPage) throw new Error("Page does not exist"); 
       
        query = query.skip(skip).limit(limit);
    }

}

module.exports = APIFeatures;