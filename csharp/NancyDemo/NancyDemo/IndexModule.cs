﻿namespace NancyDemo
{
    using Nancy;

    public class IndexModule : NancyModule
    {
        public IndexModule()
        {
            Get["/"] = _ =>
                {
                    return "Hello world!";
                };
        }
    }
}