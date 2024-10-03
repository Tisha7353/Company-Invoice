var app = angular.module('InvoiceApp', []);

app.controller('InvoiceController', function ($scope) {
    $scope.invoice = {
        to: {
            name: 'John Doe',
            title: 'Client',
            phone: '123-456-7890',
            email: 'john.doe@example.com',
            address: '123 Street, City, Country'
        },
        invoiceNo: '123456',
        dueDate: '2024-10-15',
        invoiceDate: '2024-09-15',
        payment: {
            accountNo: '123456789',
            accountName: 'Umbrella Room Ventures',
            branchName: 'Main Branch',
            ifsc: 'ABC123456'
        }
    };

    $scope.vehicleName = 'Luxury Sedan';
    $scope.actualRunningDuration = '5 hours';
    $scope.packageduration = '6 hours';
    $scope.packagedistance='140 km'
    $scope.distanceTravelled = '150 km';
    $scope.baseFare = 100;
    $scope.extraDistanceFare = 50;
    $scope.extraTimeFare = 30;
    $scope.toll = 20;

    $scope.subTotal = $scope.baseFare + $scope.extraDistanceFare + $scope.extraTimeFare + $scope.toll;
    $scope.discount = 10;
    $scope.tax = ($scope.subTotal - $scope.discount) * 0.1;
    $scope.total = $scope.subTotal - $scope.discount + $scope.tax;

    $scope.signature = 'John Doe';
});
