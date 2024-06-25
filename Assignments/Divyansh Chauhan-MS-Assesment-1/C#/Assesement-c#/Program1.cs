//using System;

//public class MyClass
//{
//    protected int protectedVar = 10;
//    public int publicVar = 20;
//    private int privateVar = 30;

//    public void Display()
//    {
//        Console.WriteLine($"Protected Variable: {protectedVar}");
//        //Console.WriteLine($"Public Variable: {publicVar}");
//        //Console.WriteLine($"private variable: {privateVar}");
//    }

//}

//public class DerivedClass : MyClass
//{
//    public void DisplayProtected()
//    {
//        Console.WriteLine($"protected variable in derived class: {protectedVar}");
//    }
//}
//namespace MyApp
//{
//    internal class Program
//    {
//        static void Main(string[] args)
//        {
//            MyClass myObj = new MyClass();
//            myObj.Display();

//            DerivedClass myDerivedObj = new DerivedClass();
//            myDerivedObj.DisplayProtected();
//        }
//    }
//}