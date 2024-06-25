using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class GobalExceptionHandler
{
    public static void Handle(Exception ex)
    {
        Console.WriteLine(ex.ToString());
    }
}
public class ClassA
{
    public System.Exception ThrowException1()
    {
        throw new Exception("Exception in Class A");
    }
}
public class ClassB
{
    public System.Exception ThrowException2()
    {
        throw new Exception("Exception in Class B");
    }
}
public class ClassC
{
    public System.Exception ThrowException3()
    {
        throw new Exception("Exception in Class C");
    }
}
namespace ExceptionHandling
{
    internal class Program2
    {
        static void Main(string[] args)
        {
            ClassA myObjA = new ClassA();
            ClassB myObjB = new ClassB();
            ClassC myObjC = new ClassC();

            GobalExceptionHandler.Handle(myObjA.ThrowException1());
            GobalExceptionHandler.Handle(myObjB.ThrowException2());
            GobalExceptionHandler.Handle(myObjC.ThrowException3());

        }
    }
}
