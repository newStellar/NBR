
var app = angular.module("receiptApp",[]);

app.controller("receiptCtrl",function($scope ,$http){

	$scope.fieldNames= ["Admission Fee","Re-Admission Fee(G.F)","Re-Admission Fee(B.F)","Monthly Sybscription","Late Fee","Benevolent Fund Fee","Membership Fee",
	"Voluntary Deposit Fund Fee","Hall room rent" ,"Election nomination Fee","National Bar","Member list Directory" ,"Constitution" ,"Membership Application Form" ,
	"Donation","Accomodation","Wefare Fund","Vakalatnama(G.F)","Vakalatnama(B.F)","Appeal Form","Tribunal Form","Training" ,"Membership Certificate" ,"ID Card",
	"Library Books" ,"Others" 
	];

	$scope.fieldValues = [];
	$scope.srchStart = new Date();
	$scope.srchEnd = new Date();
	$scope.updateEnable =false ;
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
        
        var today = dd+'-'+mm+'-'+yyyy;
        var MonthYear = mm+'-'+yyyy;
        
        if(flag == "full")return today;
        else return MonthYear;
    }

    var makeObject = function(){

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

		return details;
    }

    var strReverse = function(str,flag){
        var arr = str.split("-");

        if(flag == "full")return arr[2]+"-"+arr[1]+"-"+arr[0];
         
        
        	//console.log(arr[1]+"-"+arr[0]+"-01");
        	return arr[1]+"-"+arr[0]+"-01";
        

    }

    var fillFieldValues = function(data){


   	$scope.ReciptId = data.ReciptId;
   	$scope.MemberId = data.MemberId;
   	$scope.DateTime = new Date (strReverse (data.DateTime,"full"));
   	$scope.PaidDateTimeStart = new Date( strReverse (data.PaidDateTimeStart,"half"));
   	$scope.PaidDateTimeEnd =  new Date (strReverse(data.PaidDateTimeEnd,"half"));
   	$scope.Name = data.Name;

   	$scope.fieldValues[0] =	data.AdmissionFee;	
	$scope.fieldValues[1] =	data.ReAdmissionFeeGf;
	$scope.fieldValues[2] =	data.ReAdmissionFeeBf;
	$scope.fieldValues[3] =	data.MonthlySubscription;	
	$scope.fieldValues[4] =	data.LateFee	;
	$scope.fieldValues[5] =	data.BenevolentFundFee;	
	$scope.fieldValues[6] =	data.MembershipFee;
	$scope.fieldValues[7] =	data.VoluntaryDepositFundFee;
	$scope.fieldValues[8] =	data.HallRoomRent;	
	$scope.fieldValues[9] =	data.ElectionNominationFee;	
	$scope.fieldValues[10] =	data.NationalBar;	
	$scope.fieldValues[11] =	data.MemberListDirectory;
	$scope.fieldValues[12] =	data.Constitution;	
	$scope.fieldValues[13] =	data.MembershipApplicationForm;	
	$scope.fieldValues[14] =	data.Donation;	
	$scope.fieldValues[15] =	data.Accomodation;	
	$scope.fieldValues[16] =	data.WefareFund;	
	$scope.fieldValues[17] =	data.VakalatnamaGf;	
	$scope.fieldValues[18] =	data.VakalatnamaBf;	
	$scope.fieldValues[19] =	data.AppealForm;	
	$scope.fieldValues[20] =	data.TribunalForm;	
	$scope.fieldValues[21] =	data.Training;	
	$scope.fieldValues[22] =	data.MembershipCertificate;	
	$scope.fieldValues[23] =	data.IdCard;	
	$scope.fieldValues[24] =	data.LibraryBooks;	
	$scope.fieldValues[25] =	data.Others;


   }

   $scope.clearData = function(){

   		$scope.updateEnable =false;
		$scope.fieldValues = [];
   }
	$scope.submitForm = function(){
		
		
		var details = makeObject();
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

		$scope.clearData();
	}

	$scope.getReceipt = function(){
		$scope.updateEnable =true;
		$http({

			method : "get",
			url     : "receipt_data.json"

		}).then(function(data){

			fillFieldValues(data.data);

		},function(){

		});
	}
	$scope.deleteReceipt = function(){
		$http({

			method : "get",
			url    : ""
		}).then(function(){

		},function(){

		});
	}



   
});


