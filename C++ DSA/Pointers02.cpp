#include<iostream>
using namespace std;

int main(){
    // Bad Practise
    // Garbage Pointer, Anonomys

    // int *p = 0;
    // cout << *p << endl;

    // int i = 5;
    // int *q = &i;
    // cout << q << endl;
    // cout << *q << endl;

    // int *p = 0;
    // p = &i;

    // cout << p << endl;
    // cout << *p << endl;

    int num = 5;
    int a = num;
    cout<<"Before "<<num<<endl;
    a++;
    cout<<"After "<<num<<endl;
    

    int *p = &num;
    cout<<"Before "<<num<<endl;
    (*p)++;
    cout<<"After "<<num<<endl;

    // Coping a Pointer
    int *q = p;
    cout << p << " - " << q << endl;
    cout << *p << " - " << *q << endl;

    // Importnat Concept

    int i = 3;
    int *t = &i;
    *t = *t + 1;
    // (*t)++;
    cout << *t<< endl;

    cout<<"Before t "<<t<<endl;
    t = t + 1;
    cout<<"After t "<<t<<endl;






    return 0;
}