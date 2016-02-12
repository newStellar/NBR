
var app = angular.module("receiptApp",[]);

app.controller("receiptCtrl",function($scope ,$http){

	$scope.fieldNames= ["Admission Fee","Re-Admission Fee(G.F)","Re-Admission Fee(B.F)","Monthly Sybscription","Late Fee","Benevolent Fund Fee","Membership Fee",
	"Voluntary Deposit Fund Fee","Hall room rent" ,"Election nomination Fee","National Bar","Member list Directory" ,"Constitution" ,"Membership Application Form" ,
	"Donation","Accomodation","Wefare Fund","Vakalatnama(G.F)","Vakalatnama(B.F)","Appeal Form","Tribunal Form","Training" ,"Membership Certificate" ,"ID Card",
	"Library Books" ,"Others" 
	];

	$scope.fieldValues = [];
	$scope.ReciptId ;
	$scope.MemberId ;
	$scope.Name;
	$scope.DateTime  = new Date();
	$scope.PaidDateTimeStart = new Date();
	$scope.PaidDateTimeEnd = new Date();

	var dateFormat = function(today,flag){

	
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10)dd='0'+dd
        if(mm<10) mm='0'+mm
        
        var today = dd+'/'+mm+'/'+yyyy;
        var MonthYear = mm+'/'+yyyy;
        
        if(flag == "full")return today;
        else return MonthYear;
    }   
	$scope.submitForm = function(){

		var details = {

			ReciptId			      : $scope.ReciptId,
			MemberId 				  :	$scope.MemberId,
			DateTime  				  :	dateFormat($scope.DateTime, "full"),
			PaidDateTimeStart  		  : dateFormat($scope.PaidDateTimeStart, "half"),
			PaidDateTimeEnd  	      :	dateFormat($scope.PaidDateTimeEnd, "half"), 
			Name 					  : $scope.Name,
			AdmissionFee              : $scope.fieldValues[0],
			ReAdmissionFeeGf 		  : $scope.fieldValues[1],
			ReAdmissionFeeBf          : $scope.fieldValues[2],
			MonthlySubscription   	  : $scope.fieldValues[3],
			LateFee 				  : $scope.fieldValues[4],
			BenevolentFundFee 		  :	$scope.fieldValues[5],
			MembershipFee 			  : $scope.fieldValues[6],
			VoluntaryDepositFundFee	  :	$scope.fieldValues[7],	
			HallRoomRent			  : $scope.fieldValues[8],
			ElectionNominationFee	  : $scope.fieldValues[9],
			NationalBar				  : $scope.fieldValues[10],
			MemberListDirectory  	  :	$scope.fieldValues[11],
			Constitution			  :	$scope.fieldValues[12],
			MembershipApplicationForm : $scope.fieldValues[13],
			Donation		          : $scope.fieldValues[14],
			Accomodation			  : $scope.fieldValues[15],
			WefareFund				  : $scope.fieldValues[16],
			VakalatnamaGf			  : $scope.fieldValues[17],
			VakalatnamaBf		      : $scope.fieldValues[18],
			AppealForm				  : $scope.fieldValues[19],
			TribunalForm 			  :	$scope.fieldValues[20],
			Training 				  : $scope.fieldValues[21],
			MembershipCertificate  	  :	$scope.fieldValues[22],
			IdCard 					  : $scope.fieldValues[23],
			LibraryBooks  			  : $scope.fieldValues[24],
			Others  				  :	$scope.fieldValues[25]
		};
		console.log(JSON.stringify(details));

		$http({
			url: "",
			method : "post",
			data   : JSON.stringify(details)	
		}).then(function(data){

			console.log("success");

		},function(err){
			console.log("failed");
		}); 
	}
   
});


