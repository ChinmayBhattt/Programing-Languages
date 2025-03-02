#include <iostream>
using namespace std;

void reverse(int arr[], int n){
  int start = 0;
  int end = n - 1;

  while(start<=end) {
    swap(arr[start], arr[end]);
    start++;
    end--;
  }
}
void printArray(int arr[], int n) {
  for (int i = 0; i < n; i++)
  {
    cout << arr[i] << " ";
  }
  
}



int main(){

  int arr[6] = {1,3,5,52,36,4};
  int brr[5] = {2,5,36,7,3};

  reverse(arr,6);
  reverse(brr,5);

  printArray(arr, 6);
  cout << endl;
  printArray(brr, 5);
  
}