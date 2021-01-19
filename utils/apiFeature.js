class ApiFeature {
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
        console.log('from limit');
        return this;
    }

    paginate() {
        console.log('from paginate');
        return this;
    }

}
