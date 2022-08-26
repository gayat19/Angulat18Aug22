using SampleAPI.Models;

namespace SampleAPI.Services
{
    public class ProductService : IRepo
    {
        static List<Product> products = new List<Product>
        {
            new Product
            {
                Id=101,
                Name="Corn King Pizza",
                Price=200,
                Quantity =3,
                Pic = "./assets/images/Pizza1.jpg"
            },
              new Product
            {
                Id=102,
                Name="Veg Extravenzza",
                Price=200,
                Quantity =3,
                Pic = "./assets/images/Pizza2.jpg"
            }
        };
        public async Task<Product> Add(Product product)
        {
           products.Add(product);
            return product;
        }

        public async Task<Product> Delete(int id)
        {
            Product product = await Get(id);
            if(product != null)
            {
                products.Remove(product);
                return product;
            }
            return null;
        }

        public async Task<Product> Get(int id)
        {
            var product = products.SingleOrDefault(p=>p.Id == id);
            return product;
        }

        public async Task<ICollection<Product>> GetAll()
        {
            return products;
        }

        public async Task<Product> Update(Product product)
        {
            Product MyProduct = await Get(product.Id);
            if (product != null)
            {
                MyProduct.Name = product.Name;
                MyProduct.Price = product.Price;
                MyProduct.Quantity = product.Quantity;
                MyProduct.Pic = product.Pic;
                return product;
            }
            return null;
        }
    }
}
