export default class Poll{
    _id: string;
    title: String;
    description: String;
    color: String;
    created: Date;
    key: string;
    settings: Setting;
    statements: Array<Statements>;
    
    constructor(poll: any){
        this._id = poll.Id;
        this.title = poll.title;
        this.description = poll.description;
        this.color = poll.color;
        this.created = poll.created;
        this.key = poll.key;
        this.settings = poll.settings;
        this.statements = poll.statements;
    }
}

class Setting{    
    allowAdd: Boolean;
    showResults: Boolean;
    constructor(setting: any){
        this.allowAdd = setting.allowAdd;
        this.showResults = setting.showResults;
    }
}

class Statements{    
    _id: number;
    text: String;
        // type: {
        //     type: String,
        //     enum: ['single-select', 'multi-select', 'free-text']
        // },
        options: Array<Option>;

    constructor(statements: any){
        this._id = statements._id;
        this.text = statements.text;

        this.options = statements.options;
    }
}

class Option{    
    _id: number;
    text: string;
    constructor(option: any){
        this._id = option._id;
        this.text = option.text;
    }
}