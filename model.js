const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ 
    upMail: String,
	fullName: String,
	canAddFilesPromote: Boolean,
	canAccessFiles: Boolean,
	canDownloadJournalsPosters: Boolean,
	userType: String,
	datesLoggedIn: [Date]
})

const userModel = mongoose.model('User',userSchema)

const referenceSchema = mongoose.Schema({ 
    title: String,
	authors: [String],
	dateAdded: {
		type: Date,
		default: new Date()
	},
	book : {
		isbn: String,
		publisher: String,
		subjects: [String]
	},
	spThesis : {
		year: String,
		abstract: String,
		adviser: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		journal: String,
		poster: String,
		manuscript: String,
		sourceCode: String,
		isSP: Boolean
	}
})

const refModel = mongoose.model('Reference',referenceSchema);
