
var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope, $http){

    $scope.fieldNames = ["Member Id","Full Name","Father's Name","Mother's Name","Husband's Name","Permanent Address","Residentail Address","office Address","MobileNumber","Date of Birth",
    	"District in which practicing","If a firm name and address of the firm and the partners","Religion","Nationality","Educational qualification","Data and year receving sanad(certificate) from bangladesh bar council",
    	"qualification under 61 of the IT .act of 1922/section 74 of IT ordinance 1984","NDR registration number and date(if any)","Date of Commencement of the profession or vocation",
    	"Names of any other legal commercial or cultural association of which the applicant is the member","National ID number (if any)"];
    $scope.fieldAns = [];
    $scope.dateFieldAns = [];
    $scope.alertOn = false;

    $scope.txtRowSize = function(str){
    	
    	if( (str.length/30) > 1) {
    		return 2;
    	}
    	else return 1;
    }

   
    $scope.checkDate = function(index){
        var ans = [9,15,17];
        if(ans.indexOf(index)>-1){
            
            return true;
        };
        return false;
    }
    var init =function(){
        for(var  i=0 ;i<$scope.fieldNames.length ; i++){
            $scope.dateFieldAns[i] =  new Date();
        }
    }
    init();
    var dateFormat = function(today){

        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 
        var today = dd+'/'+mm+'/'+yyyy;

        console.log(today);
        return today;
    }    
    
    var checkValidation = function(){
        var flag = true;

        if( $scope.fieldAns[0] == "" || $scope.fieldAns[1] == "" || $scope.dateFieldAns[17] == "")flag=false;
        if($scope.fieldAns[0] == undefined || $scope.fieldAns[1] == undefined || $scope.dateFieldAns[17] == undefined)flag = false;
        return flag;

    }
    $scope.submitForm = function(){

        if(!checkValidation()){
            $scope.alertOn = true;
            return;
        }
        $scope.alertOn =false;

        var userDetails = {
            MemberId                                 :$scope.fieldAns[0],
            Name                                     :$scope.fieldAns[1],
            FatherName                               :$scope.fieldAns[2],                                  
            MotherName                               :$scope.fieldAns[3],
            HasbandName                              :$scope.fieldAns[4],
            PermanentAddress                         :$scope.fieldAns[5],
            ResidentialAddress                       :$scope.fieldAns[6],
            OfficeAddress                            :$scope.fieldAns[7],
            MobileNumber                             :$scope.fieldAns[8],                                
            DateOfBirth                              :dateFormat($scope.dateFieldAns[9]),
            District                                 :$scope.fieldAns[10],
            FirmDescription                          :$scope.fieldAns[11],
            Religion                                 :$scope.fieldAns[12],
            Nationality                              :$scope.fieldAns[13],   
            EducationalQualification                 :$scope.fieldAns[14],   
            CertificateDateBdBarCouncil              :dateFormat($scope.dateFieldAns[15]),
            QualificationUnder61                     :$scope.fieldAns[16],
            RegistrationDate                         :dateFormat($scope.dateFieldAns[17]),
            DateOfComOfTheProOrVocation              :$scope.fieldAns[18],   
            NameLegalCommercialOrCulturalAssociation :$scope.fieldAns[19],
            NationalIdNumber                         :$scope.fieldAns[20],   
        };
        
        console.log(JSON.stringify(userDetails));

        $http({
            url: "",
            method : "post",
            data   : JSON.stringify(userDetails)    
        }).then(function(data){
            console.log("success");

        },function(err){
            console.log( "failed");
        });
    }  

  

});
